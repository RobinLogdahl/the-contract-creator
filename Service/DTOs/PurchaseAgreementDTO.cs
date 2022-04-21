using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs
{
    public class PurchaseAgreementDTO
    {
        public string? BuyerName { get; set; }
        public string? BuyerSocialSecurity { get; set; }
        public string? BuyerAddress { get; set; }
        public string? BuyerPhone { get; set; }

        public string? SellerName { get; set; }
        public string? SellerSocialSecurity { get; set; }
        public string? SellerAddress { get; set; }
        public string? SellerPhone { get; set; }

        public string? Object { get; set; }
        public double? Price { get; set; }
        public string? Other { get; set; }
    }
}
