﻿using Backend.Services.Member;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class MemberController : Controller
    {
        private readonly IMemberService _memberService;

        public MemberController(IMemberService memberService)
        {
            _memberService = memberService;
        }

        [HttpGet("/api/Members")]
        public IActionResult GetAll()
        {
            var members = _memberService.GetAllMember();
            if (members == null)
            {
                return NotFound();
            }
            return Ok(members);
        }

        [HttpPost("/api/Member")]
        public async Task<IActionResult> GetMember(int userID)
        {
            var result = await _memberService.GetMemberById(userID);
            if (result.IsError)
            {
                return NotFound(
                    new
                    {
                        error = result.ErrorMessage
                    });
            }

            return Ok(result.Payload);
        }
    }
}
