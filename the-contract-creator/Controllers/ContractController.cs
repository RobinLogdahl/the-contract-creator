using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service;
using Service.DTOs;

namespace the_contract_creator.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        [HttpPost("create")]
        public IActionResult ContractGenerator(ContractDTO input)
        {
            try
            {
                return Ok(ContractService.Instance.ContractCreator(input));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
