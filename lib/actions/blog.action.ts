export async function getTopArticles() {
  const chosenPost = [
    {
      id: 1,
      title: " باور غلط درمورد برنامه نویسی که شما را از یادگیری منصرف می‌کنند",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2022/04/Downloader.la-62503d4c135f9-768x512.jpg",
      date: "",
    },
    {
      id: 2,
      title:
        " قایسه SQL Server و Oracle – کدام پلتفرم دیتابیس برای ما بهتر است؟",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2024/10/sql-server-vs-oracle-database.jpg",
      date: "",
    },
    {
      id: 3,
      title:
        " هترین ابزارهای ساخت ویدیو با هوش مصنوعی برای یوتیوب، اینستاگرام و تیک‌تاک",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2024/09/best-ai-video-generators-768x432.jpg",
      date: "",
    },
    {
      id: 4,
      title:
        " حقوق دیتا ساینتیست در ایران، جهان و شرکت‌های بزرگ تکنولوژی چقدر است؟",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2024/09/how-much-is-data-scientists-salary-768x432.jpg",
      date: "",
    },
    {
      id: 5,
      title: " جذاب‌ترین فیلم‌های حوزه هک و امنیت که باید در سال 2024 ",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2024/04/cyber-security-movies-2-768x428.jpg",
      date: "",
    },
    {
      id: 6,
      title: "۸ راه واقعی برای کسب درآمد دلاری با برنامه نویسی که باید بشناسید",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2024/02/earn-money-with-programming-768x439.webp",
      date: "",
    },
    {
      id: 7,
      title: "5 ابزار هوش مصنوعی که کیفیت عکس را بالا ",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2023/11/cover-2-768x400.jpg",
      date: "",
    },
    {
      id: 8,
      title: "پردرآمدترین زبان برنامه نویسی چیست؟ – فهرست ۱۲ زبان پرتقاضا ",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2023/09/highest-paying-programming-jobs-768x432.jpg",
      date: "",
    },
    {
      id: 9,
      title: "اه های کسب درآمد از هوش مصنوعی – ۱۴ راه برای مبتدی‌ها و ",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2023/09/making-money-with-AI-768x432.jpg",
      date: "",
    },
    {
      id: 10,
      title: "پایتون یا PHP ؟ – مقایسه پایتون و پی اچ پی به زبان ساده",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2023/08/php-vs-python-768x432.jpg",
      date: "",
    },
    {
      id: 11,
      title: "یادگیری ماشین در امنیت سایبری",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2021/09/machine-learning-cybersecurity-768x427.jpg",
      date: "",
    },
    {
      id: 12,
      title: "نقشه راه یادگیری ماشین",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2022/12/%D8%B1%D9%88%D8%AF%D9%85%D9%BE-ML-768x512.png",
      date: "",
    },
    {
      id: 13,
      title: " تغییرات PHP 8.0 ",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2021/10/PHP-8.0-768x461.jpg",
      date: "",
    },
    {
      id: 14,
      title: "برگه تقلب مصاحبه: از اولین تماس تلفنی تا استخدام",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2022/12/GetPaidStock.com-63a0cf7e1e34d-768x512.jpg",
      date: "",
    },
    {
      id: 15,
      title: "کاربران کوئرا شب‌ها موفق‌ترند یا روزها؟",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2022/10/time-768x512.jpg",
      date: "",
    },
    {
      id: 16,
      title: "پایتون یا PHP ؟ – مقایسه پایتون و پی اچ پی به زبان ساده   ",
      imageUrl:
        "https://quera.org/blog/wp-content/uploads/2023/08/php-vs-python-768x432.jpg",
      date: "",
    },
  ];
  return chosenPost;
}
