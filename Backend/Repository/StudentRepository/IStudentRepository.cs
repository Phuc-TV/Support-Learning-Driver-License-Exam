﻿using Backend.DB.Models;

namespace Backend.Repository.StudentRepository
{
    public interface IStudentRepository
    {
        IQueryable<Student>? GetAll();

        Task<Student?> GetByIdAsync(string id);

        Task<Student?> CreateAsync(Student student);

        Task<Student?> UpdateAsync(Student student);
    }
}
