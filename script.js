function livePreview() {
    // Get the code from each textarea
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    
    const outputFrame = document.getElementById("output-preview").contentWindow.document;

    // Write the full HTML document into the iframe
    outputFrame.open();
    outputFrame.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}</script>
        </body>
        </html>
    `);
    outputFrame.close();
}
