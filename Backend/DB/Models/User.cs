﻿using System;
using System.Collections.Generic;

namespace Backend.DB.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string FullName { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string? Email { get; set; }

    public DateTime CreateTime { get; set; }

    public bool Status { get; set; }

    public int RoleId { get; set; }

    public virtual Member? Member { get; set; }

    public virtual Mentor? Mentor { get; set; }

    public virtual Role Role { get; set; } = null!;

    public virtual Staff? Staff { get; set; }
}
