const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "index.html"),
    outputPath: path.join(__dirname, "tatiana-inama-resume.pdf"),
    templatePath: path.join(__dirname, "/"),
    include: [
      path.join(__dirname, "styles", "styles.css"),
    ],
    renderDelay: 10000,
    pdf: {
      printBackground: true,
      width: '1024px'
    }
  })

  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
}

(async () => {
  try {
    console.log("converting to pdf...");
    await run()
    console.log("done!")
  } catch (error) {
    console.error(error)
  } finally {
    process.exit();
  }
})()