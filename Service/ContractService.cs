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
                @"<div class=""contract-container preview"" id=""contract-container"">
                    <div class=""contract-header"">
                        <p class=""contract-title"">Köpeskontrakt</p>
                        <p class=""contract-object"">{{objectName}}</p>
                    </div>
                    <div class=""buyer-container"">
                        <p class=""buyer-title"">Köpare</p>
                        <p class=""buyer-name"">Namn</p>
                        <p class=""buyer-name-value"">{{buyerName}}</p>
                        <p class=""buyer-social"">Personnummer</p>
                        <p class=""buyer-social-value"">{{buyerSocial}}</p>
                        <p class=""buyer-address"">Adress</p>
                        <p class=""buyer-address-value"">{{buyerAddress}}</p>
                        <p class=""buyer-phone"">Telefon</p>
                        <p class=""buyer-phone-value"">{{buyerPhone}}</p>
                    </div>
                    <div class=""seller-container"">
                        <p class=""seller-title"">Säljare</p>
                        <p class=""seller-name"">Namn</p>
                        <p class=""seller-name-value"">{{sellerName}}</p>
                        <p class=""seller-social"">Personnummer</p>
                        <p class=""seller-social-value"">{{sellerSocial}}</p>
                        <p class=""seller-address"">Adress</p>
                        <p class=""seller-address-value"">{{sellerAddress}}</p>
                        <p class=""seller-phone"">Telefon</p>
                        <p class=""seller-phone-value"">{{sellerPhone}}</p>
                    </div>
                    <div class=""product-container"">
                        <p class=""product-title"">Produkt</p>
                        <p class=""product-type"">Typ av produkt</p>
                        <p class=""product-type-value"">{{objectName}}</p>
                        <p class=""product-price"">Pris</p>
                        <p class=""product-price-value"">{{objectPrice}}</p>
                        <p class=""product-info"">Annan information</p>
                        <p class=""product-info-value"">{{objectOtherInfo}}</p>
                    </div>
                    <div class=""contract-footer"">
                        <p class=""signing-area"">
                        <div class=""signing-container"">
                            <p class=""seller-place-date"">Ort, Datum:</p>
                            <p class=""buyer-place-date"">Ort, Datum:</p>
                            <p class=""seller-sign"">Namnteckning, Säljare:</p>
                            <p class=""buyer-sign"">Namnteckning, Köpare:</p>
                            <p class=""name-clarification-seller"">Namnförtydligande, Säljare:</p>
                            <p class=""name-clarification-seller-value"">{{sellerName}}</p>
                            <p class=""name-clarification-buyer"">Namnförtydligande, Köpare:</p>
                            <p class=""name-clarification-buyer-value"">{{buyerName}}</p>
                        </div>
                    </div>
                </div>
                <button onclick=""window.print()"">Print</button>
                <button onclick=""GeneratePDF()"" id=""SaveAsPDF"">Save as PDF</button>";

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
