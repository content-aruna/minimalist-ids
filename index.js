export default function IDGenerator(characters) {
    this.characters = characters.split('');
    this.generatedIDs = new Set(); // Stores previously generated IDs to ensure uniqueness

    // Helper function to generate a random ID based on the rules
    this.generateID = function () {
        let id = '';

        // Generate 4 blocks of 4 characters, with dashes in between
        for (let i = 0; i < 4; i++) {
            let block = '';
            for (let j = 0; j < 4; j++) {
                let randomChar;
                do {
                    // Pick a random character
                    randomChar = this.characters[Math.floor(Math.random() * this.characters.length)];
                    // Ensure it's not the same as the last character in the block
                } while (block.length > 0 && randomChar === block[block.length - 1]);

                block += randomChar;
            }
            id += (i > 0 ? '-' : '') + block; // Add dashes between blocks
        }

        return id;
    };

    // Method to generate a unique ID and log it
    this.generateUniqueID = function () {
        let newID;
        do {
            newID = this.generateID();
        } while (this.generatedIDs.has(newID)); // Ensure uniqueness

        this.generatedIDs.add(newID); // Store the new ID
        // console.log(newID); // Log the generated ID
        return newID;
    };
}

module.exports = IDGenerator;