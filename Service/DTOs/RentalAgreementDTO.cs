using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs
{
    public class RentalAgreementDTO
    {
        public string? BuyerName { get; set; }
        public string? BuyerSocialSecurity { get; set; }
        public string? BuyerAddress { get; set; }
        public string? BuyerPostalCode { get; set; }
        public string? BuyerCity { get; set; }
        public string? BuyerPhone { get; set; }
        public string? BuyerEmail { get; set; }

        public string? SellerName { get; set; }
        public string? SellerSocialSecurity { get; set; }
        public string? SellerAddress { get; set; }
        public string? SellerPostalCode { get; set; }
        public string? SellerCity { get; set; }
        public string? SellerPhone { get; set; }
        public string? SellerEmail { get; set; }

        public string? ObjectName { get; set; }
        public string? ObjectNumber { get; set; }
        public string? ObjectAddress { get; set; }
        public string? ObjectPostalCode { get; set; }
        public string? ObjectCity { get; set; }
        public string? ObjectPurpose { get; set; }
        public double? ObjectPrice { get; set; }
        public double? ObjectArea  { get; set; }
        public double? ObjectAmountOfRooms { get; set; }
        public string? Other { get; set; }
    }
}
