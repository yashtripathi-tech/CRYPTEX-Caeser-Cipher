const plainText = document.getElementById("plainText");
const encryptedText = document.getElementById("encryptedText");
const keyInput = document.getElementById("keyInput");

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");

const status = document.getElementById("status");

const plainCount = document.getElementById("plainCount");
const encryptedCount = document.getElementById("encryptedCount");

const wheelKey = document.getElementById("wheelKey");


// ==========================================
// GET ANY INTEGER KEY
// ==========================================

function getKey() {

    const value = keyInput.value.trim();

    // Empty key
    if (value === "") {
        status.textContent = "Please enter a key.";
        keyInput.focus();
        return null;
    }

    // Check if the key is a valid integer
    if (!/^[+-]?\d+$/.test(value)) {
        status.textContent = "Key must be an integer.";
        keyInput.focus();
        return null;
    }

    try {

        // BigInt allows extremely large keys
        const bigKey = BigInt(value);

        // Normalize key to 0-25
        const normalizedKey =
            Number(((bigKey % 26n) + 26n) % 26n);

        return normalizedKey;

    } catch {

        status.textContent = "Invalid key.";
        keyInput.focus();
        return null;
    }
}


// ==========================================
// CAESAR CIPHER
// ==========================================

function caesarCipher(text, shift) {

    return [...text].map(character => {

        const code = character.charCodeAt(0);


        // ----------------------------------
        // UPPERCASE A-Z
        // ----------------------------------

        if (code >= 65 && code <= 90) {

            return String.fromCharCode(
                ((code - 65 + shift + 26) % 26) + 65
            );
        }


        // ----------------------------------
        // LOWERCASE a-z
        // ----------------------------------

        if (code >= 97 && code <= 122) {

            return String.fromCharCode(
                ((code - 97 + shift + 26) % 26) + 97
            );
        }


        // ----------------------------------
        // Numbers, spaces, symbols unchanged
        // ----------------------------------

        return character;

    }).join("");
}


// ==========================================
// CHARACTER COUNTERS
// ==========================================

function updateCounters() {

    plainCount.textContent = plainText.value.length;

    encryptedCount.textContent =
        encryptedText.value.length;
}


// ==========================================
// UPDATE KEY DISPLAY
// ==========================================

function updateWheelKey() {

    const value = keyInput.value.trim();

    if (/^[+-]?\d+$/.test(value)) {

        try {

            const normalized =
                Number(((BigInt(value) % 26n) + 26n) % 26n);

            wheelKey.textContent = normalized;

        } catch {

            wheelKey.textContent = "?";
        }

    } else {

        wheelKey.textContent = "?";
    }
}


// ==========================================
// ENCRYPT
// ==========================================

encryptBtn.addEventListener("click", () => {

    const key = getKey();

    if (key === null)
        return;


    if (plainText.value.trim() === "") {

        status.textContent =
            "Enter plain text in the upper box first.";

        plainText.focus();

        return;
    }


    encryptedText.value =
        caesarCipher(plainText.value, key);


    updateCounters();

    status.textContent =
        `Encryption successful — effective shift: +${key}.`;
});


// ==========================================
// DECRYPT
// ==========================================

decryptBtn.addEventListener("click", () => {

    const key = getKey();

    if (key === null)
        return;


    if (encryptedText.value.trim() === "") {

        status.textContent =
            "Enter encrypted text in the lower box first.";

        encryptedText.focus();

        return;
    }


    plainText.value =
        caesarCipher(encryptedText.value, -key);


    updateCounters();

    status.textContent =
        `Decryption successful — effective shift: -${key}.`;
});


// ==========================================
// LIVE UPDATES
// ==========================================

plainText.addEventListener(
    "input",
    updateCounters
);

encryptedText.addEventListener(
    "input",
    updateCounters
);

keyInput.addEventListener(
    "input",
    updateWheelKey
);


// ==========================================
// INITIALIZE
// ==========================================

updateCounters();
updateWheelKey();