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
        public string ContractCreator(ContractDTO contract)
        {
            string source =
                @"<div class=""contract-container"">
                    <div class=""buyer-container"">
                        <p class=""buyer-name"">{{buyerName}}</p>
                        <p class=""buyer-social"">{{buyerSocial}}</p>
                        <p class=""buyer-address"">{{buyerAddress}}</p>
                        <p class=""buyer-phone"">{{buyerPhone}}</p>
                    </div>
                    <div class=""seller-container"">
                        <p class=""seller-name"">{{sellerName}}</p>
                        <p class=""seller-social"">{{sellerSocial}}</p>
                        <p class=""seller-address"">{{sellerAddress}}</p>
                        <p class=""seller-phone"">{{sellerPhone}}</p>
                    </div>
                    <div class=""object-container"">
                        <p class=""object-name"">{{objectName}}</p>
                        <p class=""object-price"">{{objectPrice}}</p>
                        <p class=""object-other-info"">{{objectOtherInfo}}</p>
                    </div>
                </div>";

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
    }
}
