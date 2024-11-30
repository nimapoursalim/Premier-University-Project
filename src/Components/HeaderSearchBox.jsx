import "./HeaderSearchBox.css"
import { useState } from "react";
import { colors } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { title: "Anna Karenina", author: "Leo Tolstoy" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Adventures of Huckleberry Finn", author: "Mark Twain" },
    { title: "Jane Eyre", author: "Charlotte Brontë" },
    { title: "Wuthering Heights", author: "Emily Brontë" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "The Kite Runner", author: "Khaled Hosseini" },
    { title: "Les Misérables", author: "Victor Hugo" },
    { title: "The Odyssey", author: "Homer" },
    { title: "Ulysses", author: "James Joyce" }
];

function HeaderSearchBox() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '15ch', } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Search" variant="standard"/>
    </Box>
  );
}


export default HeaderSearchBox;



