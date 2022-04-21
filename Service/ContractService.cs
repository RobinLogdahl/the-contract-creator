using HandlebarsDotNet;
using Service.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class ContractService
    {
        private static ContractService _instance;
        public static ContractService Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new ContractService();
                }
                return _instance;
            }
        }
        private ContractService() { }
        public string PurchaseAgreementCreator(PurchaseAgreementDTO contract)
        {
            string path = "..\\purchase-agreement.html";

            string[] sourceArr = File.ReadAllLines(path);

            string source = String.Concat(sourceArr);

            var template = Handlebars.Compile(source);

            var data = new
            {
                buyerName = contract.BuyerName,
                buyerSocial = contract.BuyerSocialSecurity,
                buyerAddress = contract.BuyerAddress,
                buyerPhone = contract.BuyerPhone,
                sellerName = contract.SellerName,
                sellerSocial = contract.SellerSocialSecurity,
                sellerAddress = contract.SellerAddress,
                sellerPhone = contract.SellerPhone,
                objectName = contract.Object,
                objectPrice = contract.Price,
                objectOtherInfo = contract.Other
            };

            var result = template(data);
            return result;
        }

        public string RentalAgreementCreator(RentalAgreementDTO contract)
        {
            string path = "..\\rentral-agreement.html";

            string[] sourceArr = File.ReadAllLines(path);

            string source = String.Concat(sourceArr);

            var template = Handlebars.Compile(source);

            var data = new
            {

            };

            var result = template(data);
            return result;
        }
    }
}
