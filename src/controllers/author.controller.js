import { Author } from "../database/models/index.model.js";

export const registerAuthor = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newAuthor = new Author({ name, email, password });
        await newAuthor.save();
        res.status(201).json({ message: "Author registered", author: newAuthor });
    } catch (err) {
        next(err);
    }
};

export const loginAuthor = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const author = await Author.findOne({ email });
        
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        
        if (author.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Author logged in", author });
    } catch (err) {
        next(err);
    }
};

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (err) {
        next(err);
    }
};

export const updateAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedAuthor) {
            return res.status(404).json({ message: "Author not found" });
        }

        res.status(200).json({ message: "Author updated", author: updatedAuthor });
    } catch (err) {
        next(err);
    }
};

export const getAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        res.status(200).json(author);
    } catch (err) {
        next(err);
    }
};

export const deleteAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedAuthor = await Author.findByIdAndDelete(id);
        
        if (!deletedAuthor) {
            return res.status(404).json({ message: "Author not found" });
        }

        res.status(200).json({ message: "Author deleted", author: deletedAuthor });
    } catch (err) {
        next(err);
    }
};
