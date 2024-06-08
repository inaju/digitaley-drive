
import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const port = 5000;

// Enable CORS for all routes (for development purposes)
app.use(cors());

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Proxy route to handle API requests
app.post("/api/proxy", async (req, res) => {
  const { method, worksheet_name, header_row, json_data } = req.body;
  console.log({ method, worksheet_name, header_row, json_data });
  const resourceId = "ck8r64c933a7ca89d4c3d9085036334643681"; // Replace with your actual resource ID
  const url = `https://sheet.zoho.eu/api/v2/ck8r64c933a7ca89d4c3d9085036334643681`;

  const paramMap = {
    method,
    worksheet_name,
    header_row,
    json_data, // Ensure json_data is stringified
  };

  console.log(paramMap)

  try {
    const response = await axios.post(url, new URLSearchParams(paramMap), {
      headers: {
        Authorization:
          "Zoho-oauthtoken 1000.f920670ba0d6f57b7b4e059e5bdb8ba8.5759225f784940309fd60e0c20e973f7",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    res.json(response.data);
  } catch (error) {
    // console.log(error)
    res.status(500).json({ error: error.message });
  }
});
function generateEmailTemplate( link, course) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
      }
      .container {
        width: 95%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 10px;
      }
      .header {
        margin-bottom: 20px;
      }
      .header h1 {
        margin: 0;
        color: #444;
        font-weight: 400;
        font-size: 18px;
      }
      .content {
        margin-bottom: 20px;
      }
      .content p {
        margin: 0 0 1em;
        font-weight: 300;
        font-size: 15px;
      }
      .footer {
        text-align: left;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
        height: 40px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        overflow: hidden;
      }
      .footer img {
        width: 140px;
        margin-top: 20px;
        position: relative;
        bottom: 1rem;
      }
      .signature {
        margin-top: 10px;
        font-style: italic;
      }
      .signature .name {
        font-weight: bold;
      }
      .signature .title {
        margin-bottom: 5px;
      }
      .signature .company {
        display: block;
        margin-bottom: 5px;
      }
      .signature .link {
        color: #1a73e8;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Hi there,</h1>
      </div>
      <div class="content">
        <p>Good Morning,</p>
        <p>
          Here is your link to the brochure for ${course} you clicked on.
        </p>
        <p>
          Thanks for your time.
        </p>
        <p class="signature">
          Sincerely,<br>
          <span class="name">Ruby Ihekweme,</span><br>
          <span class="title">Founder</span><br>
          <!-- <span class="company">Digitaley Drive</span><br> -->
          <a class="link" href=${link}>Digitaley Drive</a>
        </p>
      </div>
      <div class="footer">
        <img src="/logo.jpg" alt="Voltrox Logo" />
      </div>
    </div>
  </body>
  </html>
  `;
}






// // Function to send data to Zoho Sheet
// async function sendToZohoSheet(method, worksheet_name, header_row, json_data) {
//   const resourceId = "ck8r64c933a7ca89d4c3d9085036334643681"; // Replace with your actual resource ID
//   const url = `https://sheet.zoho.eu/api/v2/edoiod5955cf83b5d42af9d9fc19ad773073b`;

//   const paramMap = {
//     method,
//     worksheet_name,
//     header_row,
//     json_data: JSON.stringify(json_data), // Ensure json_data is stringified
//   };

//   try {
//     const response = await axios.post(url, new URLSearchParams(paramMap), {
//       headers: {
//         Authorization: "Zoho-oauthtoken 1000.f920670ba0d6f57b7b4e059e5bdb8ba8.5759225f784940309fd60e0c20e973f7",
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // New endpoint to send an email
// app.post("/api/send-email", async (req, res) => {
//   const { email, link, course } = req.body;

//   console.log(req.body)

//   // Create a transporter object using SMTP transport
//   let transporter = nodemailer.createTransport({
//     // service: "gmail", // Use your email provider here
//     host: "smtp.zoho.eu",
//     port: 465,
//     auth: {
//       user: 'contact@digitaleydrive.com',
//       pass: 'GwsRVMqt4g1H'
//     }
//     // auth: {
//     //   user: 'tobiloba.a.salau@gmail.com',
//     //   auth: 'BPfxAz8wY1Pe'
//     // }

    
//     // auth: {
//     //   user: "tobiloba.a.salau@gmail.com", // Replace with your email
//     //   pass: "gdbu hltz lxbr ipyw", // Replace with your email password or an app password
//     // },
//   });

//   // Email options
//   let mailOptions = {
//     from: "contact@digitaleydrive.com", // Replace with your email
//     to: email,
//     subject: "Brochure Link",
//     html: generateEmailTemplate(link, course)
//   };

//   try {
//     // Send email
//     let info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);
//     // Send data to Zoho Sheet
//     const result = await sendToZohoSheet('worksheet.records.add', 'Sheet1', "1", [{ Email: email, Course: course }]);
//     console.log(result);
//     res.json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email: ", error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });















async function sendToZohoSheet(method, worksheet_name, header_row, json_data) {
  const resourceId = "edoiod5955cf83b5d42af9d9fc19ad773073b"; // Replace with your actual resource ID
  const url = `https://sheet.zoho.eu/api/v2/${resourceId}`; // Ensure the URL is correct

  const paramMap = {
    method,
    worksheet_name,
    header_row,
    json_data: JSON.stringify(json_data), // Ensure json_data is stringified
  };

  try {
    const response = await axios.post(url, new URLSearchParams(paramMap), {
      headers: {
        Authorization: "Zoho-oauthtoken 1000.f920670ba0d6f57b7b4e059e5bdb8ba8.5759225f784940309fd60e0c20e973f7",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending data to Zoho Sheet:', error.response ? error.response.data : error.message);
    throw new Error(error.message);
  }
}

// New endpoint to send an email
app.post("/api/send-email", async (req, res) => {
  const { email, link, course } = req.body;

  console.log(req.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'contact@digitaleydrive.com',
      pass: 'GwsRVMqt4g1H'
    }
  });

  // Email options
  let mailOptions = {
    from: "contact@digitaleydrive.com", // Replace with your email
    to: email,
    subject: "Brochure Link",
    html: generateEmailTemplate(link, course)
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    // Send data to Zoho Sheet
    const result = await sendToZohoSheet('worksheet.records.add', 'Sheet1', "1", [{ Email: email, Course: course }]);
    console.log(result);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});





// https://sheet.zoho.eu/api/v2/ck8r64c933a7ca89d4c3d9085036334643681


// async function sendToZohoSheet(method, worksheet_name, header_row, json_data) {
//   // console.log(method, worksheet_name, header_row, json_data)
//   const resourceId = "olmce1b49df148b654064a6062c6301d7c9d0"; // Replace with your actual resource ID
//   const url = `https://sheet.zoho.com/api/v2/${resourceId}`;

//   const paramMap = {
//     method,
//     worksheet_name,
//     header_row,
//     json_data,
//   };
// console.log(paramMap)
//   try {
//     const response = await axios.post(url, new URLSearchParams(paramMap), {
//       headers: {
//         Authorization: "Zoho-oauthtoken 1000.32e602088005fc30d2f279f2c4acbcee.8be1ac56741b2cb36c5f749554e6f5f9",
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// // New endpoint to send an email
// app.post("/api/send-email", async (req, res) => {
//   const { email, link, course } = req.body;

//   console.log(req.body)

//   // Create a transporter object using SMTP transport
//   let transporter = nodemailer.createTransport({
//     service: "gmail", // Use your email provider here
//     auth: {
//       user: "tobiloba.a.salau@gmail.com", // Replace with your email
//       pass: "gdbu hltz lxbr ipyw", // Replace with your email password or an app password
//     },
//   });

//   // Email options
//   let mailOptions = {
//     from: "tobiloba.a.salau@gmail.com", // Replace with your email
//     to: email,
//     subject: "Brochure Link",
//     html: generateEmailTemplate(link, course)
//   };

//   try {
//     // Send email
//     let info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);
//     const result = await sendToZohoSheet('POST', 'sheet1', "1", [{ Email: email, Course: course }]);
//     console.log(result)
//     res.json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email: ", error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
