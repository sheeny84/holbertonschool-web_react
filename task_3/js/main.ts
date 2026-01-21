/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js'; 

// Create row with type RowElement
const row: RowElement = { firstName: "Guillaume", lastName: "Salva"};
// Add the row and store the returned ID
const newRowID: RowID = CRUD.insertRow(row);
// Define updated row with age added
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
// Update the row using id, and updated row 
const updatedRowID = CRUD.updateRow(newRowID, updatedRow);
// Delete the row
CRUD.deleteRow(updatedRowID);