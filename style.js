document.addEventListener("DOMContentLoaded", function () {
  // โหลดฟอนต์น่ารัก Itim
  const font = document.createElement("link");
  font.href = "https://fonts.googleapis.com/css2?family=Itim&display=swap";
  font.rel = "stylesheet";
  document.head.appendChild(font);

  // แสดง/ซ่อนภาพกิจกรรม
  const showBtn = document.getElementById("showImagesBtn");
  const imageBox = document.getElementById("activityImages");

  showBtn.addEventListener("click", () => {
    const isVisible = imageBox.style.display === "block";
    imageBox.style.display = isVisible ? "none" : "block";
    showBtn.textContent = isVisible ? "ดูภาพ" : "ซ่อนภาพ";
  });

  // สร้าง container และย้ายเนื้อหาทั้งหมดเข้าไป
  const container = document.createElement("div");
  container.className = "container";
  [...document.body.children].forEach(el => {
    if (el.tagName !== "SCRIPT" && el.tagName !== "STYLE") {
      container.appendChild(el);
    }
  });
  document.body.appendChild(container);

  // ป้าย PORTFOLIO
  const label = document.createElement("div");
  label.textContent = "PORTFOLIO";
  Object.assign(label.style, {
    padding: "10px 20px",
    margin: "20px auto",
    display: "block",
    width: "fit-content",
    fontWeight: "bold",
    fontSize: "20px",
    border: "3px solid #FFEDF6",
    borderRadius: "10px",
    backgroundColor: "#fff7df",
    color: "#222",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "'Itim', cursive"
  });
  container.insertBefore(label, container.firstChild);

  // สไตล์ทั้งหมด
  const fa = document.createElement("link");
  fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
  fa.rel = "stylesheet";
  document.head.appendChild(fa);
  const style = document.createElement("style");
  style.textContent = `
    body {
      background-color: #ffffff; /* พื้นรอบนอก */
      margin: 0;
      padding: 40px 0;
      font-family: 'Itim', cursive; /* ฟอนต์น่ารัก */
    }

    .container {
      background-color: #FFEDF6;  /* พื้นในกรอบ */
      color: #333;
      max-width: 800px;
      margin: auto;
      padding: 30px;
      border: 2px solid #e6e6e6;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    header {
      text-align: center;
      margin-bottom: 40px;
    }

    header h2 {
      font-size: 22px;
      margin-top: 10px;
    }

    header p {
      font-size: 16px;
      color: #666;
      margin-top: 5px;
    }

    #activities button {
      padding: 10px 20px;
      background-color:rgb(255, 223, 147);       /* สีเหลืองแบบ portfolio */
      border: none;
      border-radius: 10px;             /* มุมมน */
      color: #fff;
      font-size: 16px;
      font-family: 'Itim', cursive;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      transition: background 0.3s ease;
    }

    #activities button:hover {
     background-color: #e6a800;       /* เหลืองเข้มขึ้นเวลาชี้ */
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* ✅ 2 คอลัมน์ */
      gap: 20px;
      background-color: #fff7df;
      border: 2px solid #FDB507;
      border-radius: 12px;
      padding: 20px;
      margin-top: 20px;
    }

    .image-item {
      text-align: center;
    }

    .image-item img {
      width: 50%;
      height: 220px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .caption {
      margin-top: 9px;
      font-size: 15px;
      font-family: 'Itim', cursive;
      color: #444;
    }

    img.logo {
      width: 130px;
      height: 130px;
      object-fit: cover;
      border-radius: 50%;
      display: block;
      margin: 0 auto 15px;
      box-shadow: 0 0 12px rgba(0,0,0,0.2);
    }

    section {
      margin-bottom: 40px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #e0e0e0;
    }

    footer {
      text-align: center;
      color: #888;
      font-size: 0.9em;
    }
  `;
  document.head.appendChild(style);
});
