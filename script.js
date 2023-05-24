function encryptText() {
    const plaintext = document.getElementById("plaintext").value;
    const key = parseInt(document.getElementById("key").value);
  
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      if (char.match(/[a-z]/i)) {
        const charCode = plaintext.charCodeAt(i);
        let encryptedCharCode;
  
        if (char === char.toLowerCase()) {
          encryptedCharCode = ((charCode - 97 + key) % 26) + 97;
        } else {
          encryptedCharCode = ((charCode - 65 + key) % 26) + 65;
        }
  
        ciphertext += String.fromCharCode(encryptedCharCode);
      } else {
        ciphertext += char;
      }
    }
  
    document.getElementById("output").value = ciphertext;
  
    // Download the encrypted file
    saveFile(ciphertext);
  }
  
  function decryptText() {
    const ciphertext = document.getElementById("plaintext").value;
    const key = parseInt(document.getElementById("key").value);
  
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      if (char.match(/[a-z]/i)) {
        const charCode = ciphertext.charCodeAt(i);
        let decryptedCharCode;
  
        if (char === char.toLowerCase()) {
          decryptedCharCode = ((charCode - 97 - key + 26) % 26) + 97;
        } else {
          decryptedCharCode = ((charCode - 65 - key + 26) % 26) + 65;
        }
  
        plaintext += String.fromCharCode(decryptedCharCode);
      } else {
        plaintext += char;
      }
    }
  
    document.getElementById("output").value = plaintext;
  
    // Download the decrypted file
    saveFile(plaintext);
  }
  
  function saveFile(text) {
    const outputText = ""
  
    const filename = "encrypted_or_decrypted_file.txt";
    const fileContent = outputText + text;
    const blob = new Blob([fileContent], { type: "text/plain" });
  
    // Create a temporary link element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;
    downloadLink.style.display = "none";
  
    // Append the link element to the document body and click it
    document.body.appendChild(downloadLink);
    downloadLink.click();
  
    // Clean up by removing the link element
    document.body.removeChild(downloadLink);
  }
  