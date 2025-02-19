﻿using System;
using System.Collections.Generic;

namespace Backend.DB.Models;

public partial class Mentor
{
    public int MentorId { get; set; }

    public string ResidenceAddress { get; set; } = null!;

    public bool Status { get; set; }

    public int UserId { get; set; }

    public virtual ICollection<Class> Classes { get; set; } = new List<Class>();

    public virtual User User { get; set; } = null!;
}
