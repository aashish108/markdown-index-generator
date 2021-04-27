# Markdown Table of Contents Generator

A small package to generate a table of contents based on the markdown files present in a folder. Made some changes so it works with Obsidian Notes.

## Installation

This package is intended to install as a global script.
In order to install it on your machine run the following command:

```
npm install -g markdown-index-generator
```

## Usage

To use this package run the following command:


```
markdown-index-generator <folder_location> <file_to_add_index>
```


## Example

Suppose you have the following folder with markdown files:

```
folder/
    index.md
    page1.md
    page2.md
```

To generate the table of contents and add it to *index.md*, run the following command:

```
markdown-index-generator folder index.md
```

As result, it is add the following table of content to *index.md*:

```
## Table of Contents

* [[File1]]
* [[File2]]
```
