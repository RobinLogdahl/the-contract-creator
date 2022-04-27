﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service;
using Service.DTOs;

namespace the_contract_creator.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        [HttpPost("purchase-agreement")]
        public IActionResult PurchaseAgreement(PurchaseAgreementDTO input)
        {
            try
            {
                return Ok(ContractService.Instance.PurchaseAgreementCreator(input));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("rental-agreement")]
        public IActionResult RentalAgreement(RentalAgreementDTO input)
        {
            try
            {
                return Ok(ContractService.Instance.RentalAgreementCreator(input));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("test-agreement")]
        public IActionResult DynamicCreator(BuyerDTO buyer, SellerDTO seller)
        {
            try
            {
                return Ok(ContractService.Instance.GenerateDynamicContract(buyer, seller));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
