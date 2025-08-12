const multer = require("multer");
const Article = require("../../models/Article");
const fs = require("fs");
const path = require("path");

// تنظیمات ذخیره‌سازی فایل‌های آپلود شده
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "assets/uploads/";
    // ایجاد مسیر اگر وجود نداشت
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // بررسی وجود فایل با نام مشابه
    const fileName = Date.now() + "-" + file.originalname;
    const filePath = path.join("assets/uploads/", fileName);

    if (fs.existsSync(filePath)) {
      cb(new Error("فایل با این نام قبلاً وجود دارد"));
    } else {
      cb(null, fileName);
    }
  },
});

// فیلتر فایل‌های مجاز
const fileFilter = (req, file, cb) => {
  // فقط تصاویر پذیرفته می‌شوند
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("فقط فایل‌های تصویری مجاز هستند!"), false);
  }
  cb(null, true);
};

// پیکربندی multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // محدودیت 5 مگابایتی
  },
});

// میدلور آپلود فایل با مدیریت خطا
const uploadCoverImage = (req, res, next) => {
  upload.single("coverImage")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        message: `خطای آپلود: ${err.message}`,
      });
    } else if (err) {
      return res.status(500).json({
        message: `خطای ناشناخته: ${err.message}`,
      });
    }
    next();
  });
};

// کنترلر ایجاد مقاله با تصویر
const createArticle = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "لطفاً یک تصویر جلد آپلود کنید" });
    }

    // بررسی وجود فایل در مسیر
    const filePath = req.file.path;
    if (!fs.existsSync(filePath)) {
      return res.status(400).json({ message: "فایل آپلود شده یافت نشد" });
    }

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      coverImage: filePath,
      author: req.body.author,
    });

    await newArticle.save();
    res.status(201).json({
      message: "مقاله با موفقیت ایجاد شد",
      article: newArticle,
      fileExists: true,
    });
  } catch (error) {
    // پاک کردن فایل در صورت خطا
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(400).json({ message: error.message });
  }
};

// تابع جدید برای بررسی وجود فایل
const checkImageExists = (filePath) => {
  return new Promise((resolve) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      resolve(!err);
    });
  });
};

// کنترلر برای بررسی وجود تصویر
const checkArticleImage = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "مقاله یافت نشد" });
    }

    const imageExists = await checkImageExists(article.coverImage);
    res.json({
      exists: imageExists,
      message: imageExists ? "تصویر وجود دارد" : "تصویر یافت نشد",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadCoverImage,
  createArticle,
  checkArticleImage,
};
