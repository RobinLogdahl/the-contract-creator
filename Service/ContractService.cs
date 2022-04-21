﻿using HandlebarsDotNet;
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
            string source = @"
                <div class=""main"">
                    <button onclick=""window.print()"">Print</button>
                    <button onclick=""GeneratePDF()"" id=""SaveAsPDF"">Save as PDF</button>
                    <div class=""preview-container"">
                        <div class=""contract-container preview"" id=""contract-container"">
                            <div class=""contract-header"">
                                <p class=""contract-title header-text"">Köpeskontrakt</p>
                                <p class=""contract-object title-text"">{{objectName}}</p>
                            </div>
                            <div class=""buyer-container"">
                                <p class=""buyer-title title-text"">Köpare</p>
                                <p class=""buyer-name contract-text"">Namn</p>
                                <p class=""buyer-name-value input-text"">{{buyerName}}</p>
                                <p class=""buyer-social contract-text"">Personnummer</p>
                                <p class=""buyer-social-value input-text"">{{buyerSocial}}</p>
                                <p class=""buyer-address contract-text"">Adress</p>
                                <p class=""buyer-address-value input-text"">{{buyerAddress}}</p>
                                <p class=""buyer-phone contract-text"">Telefon</p>
                                <p class=""buyer-phone-value input-text"">{{buyerPhone}}</p>
                            </div>
                            <div class=""seller-container"">
                                <p class=""seller-title title-text"">Säljare</p>
                                <p class=""seller-name contract-text"">Namn</p>
                                <p class=""seller-name-value input-text"">{{sellerName}}</p>
                                <p class=""seller-social contract-text"">Personnummer</p>
                                <p class=""seller-social-value input-text"">{{sellerSocial}}</p>
                                <p class=""seller-address contract-text"">Adress</p>
                                <p class=""seller-address-value input-text"">{{sellerAddress}}</p>
                                <p class=""seller-phone contract-text"">Telefon</p>
                                <p class=""seller-phone-value input-text"">{{sellerPhone}}</p>
                            </div>
                            <div class=""product-container"">
                                <p class=""product-title title-text"">Produkt</p>
                                <p class=""product-type contract-text"">Typ av produkt</p>
                                <p class=""product-type-value input-text"">{{objectName}}</p>
                                <p class=""product-price contract-text"">Pris</p>
                                <p class=""product-price-value input-text"">{{objectPrice}} kronor</p>
                                <p class=""product-info contract-text"">Annan information</p>
                                <p class=""product-info-value input-text"">{{objectOtherInfo}}</p>
                            </div>
                            <div class=""contract-footer"">
                                <p class=""signing-area"">
                                <div class=""signing-container"">
                                    <p class=""seller-place-date contract-text"">Ort, Datum:</p>
                                    <hr class=""seller-date-line"">
                                    <p class=""buyer-place-date contract-text"">Ort, Datum:</p>
                                    <hr class=""buyer-date-line"">
                                    <p class=""seller-sign contract-text"">Namnteckning, Säljare:</p>
                                    <hr class=""seller-signing-line"">
                                    <p class=""buyer-sign contract-text"">Namnteckning, Köpare:</p>
                                    <hr class=""buyer-signing-line"">
                                    <p class=""name-clarification-seller contract-text"">Namnförtydligande, Säljare:</p>
                                    <p class=""name-clarification-seller-value input-text"">{{sellerName}}</p>
                                    <p class=""name-clarification-buyer contract-text"">Namnförtydligande, Köpare:</p>
                                    <p class=""name-clarification-buyer-value input-text"">{{buyerName}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
";


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
