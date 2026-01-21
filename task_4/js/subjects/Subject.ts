/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    private _teacher!: Teacher;

    public set teacher(newTeacher: Teacher) {
      this._teacher = newTeacher;
    }
  }
}