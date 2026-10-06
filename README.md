# CRYPTEX — Caesar Cipher Encryption & Decryption Tool

A web-based Caesar Cipher tool for encrypting and decrypting text using a user-defined shift key. CRYPTEX features a dark cybersecurity-themed interface with a simple and interactive design.

## Live Server Link

Open CRYPTEX – Caesar Cipher Tool
https://yashtripathi-tech.github.io/CRYPTEX-Caeser-Cipher/

## Features

- Encrypt plaintext using the Caesar Cipher
- Decrypt encrypted text
- Supports shift keys from `0–25`
- Preserves uppercase and lowercase characters
- Spaces, numbers, and punctuation remain unchanged
- Simple and user-friendly interface
- Dark cybersecurity-themed UI with a glowing lock design

## How Caesar Cipher Works

The Caesar Cipher is a classical substitution cipher in which each letter of the plaintext is shifted by a fixed number of positions in the alphabet.

For example, with a key of `3`:

```text
Plaintext:  HELLO
Key:        3
Encrypted:  KHOOR
```

For decryption, the same key is used to shift the letters back to their original positions.

## How to Run

1. Download or clone this repository.
2. Open the project folder in **Visual Studio Code**.
3. Right-click on `index.html`.
4. Select **Open with Live Server**.
5. The CRYPTEX tool will open in your web browser.

> **Note:** The project uses Live Server for local execution.

## How to Use

### Encryption

1. Enter the plaintext in the **upper text box**.
2. Enter a key between `0–25`.
3. Click **ENCRYPT**.
4. The encrypted text will appear in the **lower text box**.

### Decryption

1. Enter the encrypted text in the **lower text box**.
2. Enter the same key used during encryption.
3. Click **DECRYPT**.
4. The decrypted plaintext will appear in the **upper text box**.

## Input Rules

- The key must be a number between `0–25`.
- Uppercase and lowercase letters are preserved.
- Spaces remain unchanged.
- Numbers remain unchanged.
- Punctuation and special characters remain unchanged.

## Technologies Used

- **HTML5** — Structure of the application
- **CSS3** — Styling and cybersecurity-themed interface
- **JavaScript** — Caesar Cipher encryption and decryption logic

## Project Structure

```text
CRYPTEX/
│
├── assets/
├── index.html
├── script.js
├── style.css
└── README.md
```

## Project Purpose

CRYPTEX was developed as a practical implementation of the **Caesar Cipher**, demonstrating the concepts of classical cryptography through a web-based encryption and decryption tool.

## Author

**Yash Tripathi**

Cryptography Project