"use strict";
exports.id = 8367;
exports.ids = [8367];
exports.modules = {

/***/ 8367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JO": () => (/* binding */ Admin_Sign_in),
/* harmony export */   "_x": () => (/* binding */ Admin_Sign_up),
/* harmony export */   "v3": () => (/* binding */ Admin_Verify),
/* harmony export */   "IS": () => (/* binding */ Admin_Role_ADD),
/* harmony export */   "_Q": () => (/* binding */ Admin_Role_Edit),
/* harmony export */   "Xu": () => (/* binding */ Admin_Role_Delete),
/* harmony export */   "gu": () => (/* binding */ Admin_Role_GetOne),
/* harmony export */   "cl": () => (/* binding */ Admin_Role_GetAll),
/* harmony export */   "Fx": () => (/* binding */ Admin_Department_ADD),
/* harmony export */   "ci": () => (/* binding */ Admin_Department_Edit),
/* harmony export */   "gL": () => (/* binding */ Admin_Department_Delete),
/* harmony export */   "Rt": () => (/* binding */ Admin_Department_GetOne),
/* harmony export */   "_Z": () => (/* binding */ Admin_Department_GetAll),
/* harmony export */   "P8": () => (/* binding */ Admin_Staff_ADD),
/* harmony export */   "vo": () => (/* binding */ Admin_Staff_Edit),
/* harmony export */   "BM": () => (/* binding */ Admin_Staff_Delete),
/* harmony export */   "ZW": () => (/* binding */ Admin_Staff_GetOne),
/* harmony export */   "Qc": () => (/* binding */ Admin_Staff_Password),
/* harmony export */   "hP": () => (/* binding */ Admin_Staff_GetAll),
/* harmony export */   "mh": () => (/* binding */ Admin_Staff_Active),
/* harmony export */   "n7": () => (/* binding */ Admin_Staff_Profile_Image),
/* harmony export */   "t$": () => (/* binding */ Admin_Client_Group_ADD),
/* harmony export */   "hq": () => (/* binding */ Admin_Client_Group_Delete),
/* harmony export */   "Xj": () => (/* binding */ Admin_Client_Group_GetAll),
/* harmony export */   "o6": () => (/* binding */ Admin_Currency_ADD),
/* harmony export */   "ge": () => (/* binding */ Admin_Currency_Edit),
/* harmony export */   "Ac": () => (/* binding */ Admin_Currency_Delete),
/* harmony export */   "ls": () => (/* binding */ Admin_Currency_GetOne),
/* harmony export */   "cH": () => (/* binding */ Admin_Currency_GetAll),
/* harmony export */   "mC": () => (/* binding */ Admin_Currency_Default),
/* harmony export */   "pC": () => (/* binding */ Admin_Tax_ADD),
/* harmony export */   "$A": () => (/* binding */ Admin_Tax_Edit),
/* harmony export */   "PS": () => (/* binding */ Admin_Tax_Delete),
/* harmony export */   "E8": () => (/* binding */ Admin_Tax_GetOne),
/* harmony export */   "rt": () => (/* binding */ Admin_Tax_GetAll),
/* harmony export */   "sm": () => (/* binding */ Admin_Client_ADD),
/* harmony export */   "ON": () => (/* binding */ Admin_Client_Edit),
/* harmony export */   "qO": () => (/* binding */ Admin_Client_Delete),
/* harmony export */   "y1": () => (/* binding */ Admin_Client_GetOne),
/* harmony export */   "Pe": () => (/* binding */ Admin_Client_GetAll),
/* harmony export */   "tY": () => (/* binding */ Admin_Client_Active),
/* harmony export */   "U5": () => (/* binding */ Admin_Client_Get),
/* harmony export */   "c4": () => (/* binding */ Admin_Contract_Type_ADD),
/* harmony export */   "WF": () => (/* binding */ Admin_Contract_Type_Delete),
/* harmony export */   "IY": () => (/* binding */ Admin_Contract_Type_GetAll),
/* harmony export */   "Pk": () => (/* binding */ Admin_Contract_ADD),
/* harmony export */   "Eo": () => (/* binding */ Admin_Contract_Edit),
/* harmony export */   "hL": () => (/* binding */ Admin_Contract_Delete),
/* harmony export */   "fM": () => (/* binding */ Admin_Contract_GetOne),
/* harmony export */   "aE": () => (/* binding */ Admin_Contract_GetAll),
/* harmony export */   "RB": () => (/* binding */ Admin_Project_ADD),
/* harmony export */   "Gl": () => (/* binding */ Admin_Project_Edit),
/* harmony export */   "Uy": () => (/* binding */ Admin_Project_Delete),
/* harmony export */   "jC": () => (/* binding */ Admin_Project_GetOne),
/* harmony export */   "Ol": () => (/* binding */ Admin_Project_GetAll),
/* harmony export */   "VS": () => (/* binding */ Admin_Accounting_Transaction_Bank_ADD),
/* harmony export */   "xE": () => (/* binding */ Admin_Accounting_Transaction_Bank_Delete),
/* harmony export */   "QS": () => (/* binding */ Admin_Accounting_Transaction_Bank_GetAll),
/* harmony export */   "Pb": () => (/* binding */ Admin_Accounting_JournalEntry_ADD),
/* harmony export */   "dA": () => (/* binding */ Admin_Accounting_JournalEntry_Edit),
/* harmony export */   "iz": () => (/* binding */ Admin_Accounting_JournalEntry_Delete),
/* harmony export */   "DM": () => (/* binding */ Admin_Accounting_JournalEntry_GetOne),
/* harmony export */   "EJ": () => (/* binding */ Admin_Accounting_JournalEntry_GetAll),
/* harmony export */   "rC": () => (/* binding */ Admin_Accounting_Transfer_ADD),
/* harmony export */   "Wn": () => (/* binding */ Admin_Accounting_Transfer_Edit),
/* harmony export */   "Mw": () => (/* binding */ Admin_Accounting_Transfer_Delete),
/* harmony export */   "_r": () => (/* binding */ Admin_Accounting_Transfer_GetOne),
/* harmony export */   "W0": () => (/* binding */ Admin_Accounting_Transfer_GetAll),
/* harmony export */   "eC": () => (/* binding */ Admin_Accounting_Chart_ADD),
/* harmony export */   "xg": () => (/* binding */ Admin_Accounting_Chart_Edit),
/* harmony export */   "Ix": () => (/* binding */ Admin_Accounting_Chart_Delete),
/* harmony export */   "nt": () => (/* binding */ Admin_Accounting_Chart_GetOne),
/* harmony export */   "l2": () => (/* binding */ Admin_Accounting_Chart_GetAll),
/* harmony export */   "h$": () => (/* binding */ Admin_Accounting_Chart_Active),
/* harmony export */   "uj": () => (/* binding */ Admin_Warehouse_ADD),
/* harmony export */   "$B": () => (/* binding */ Admin_Warehouse_Edit),
/* harmony export */   "D7": () => (/* binding */ Admin_Warehouse_Delete),
/* harmony export */   "T": () => (/* binding */ Admin_Warehouse_GetOne),
/* harmony export */   "kq": () => (/* binding */ Admin_Warehouse_GetAll),
/* harmony export */   "vU": () => (/* binding */ Admin_Product_ADD),
/* harmony export */   "Ai": () => (/* binding */ Admin_Product_Edit),
/* harmony export */   "ne": () => (/* binding */ Admin_Product_Delete),
/* harmony export */   "jl": () => (/* binding */ Admin_Product_GetOne),
/* harmony export */   "uk": () => (/* binding */ Admin_Product_GetAll),
/* harmony export */   "ds": () => (/* binding */ Admin_Good_ADD),
/* harmony export */   "oe": () => (/* binding */ Admin_Good_Edit),
/* harmony export */   "FM": () => (/* binding */ Admin_Good_Delete),
/* harmony export */   "Qp": () => (/* binding */ Admin_Good_GetOne),
/* harmony export */   "eV": () => (/* binding */ Admin_Good_GetAll),
/* harmony export */   "Y2": () => (/* binding */ Admin_GoodQuality_ADD),
/* harmony export */   "gA": () => (/* binding */ Admin_GoodQuality_GetAll),
/* harmony export */   "vp": () => (/* binding */ Admin_Item_Field_ADD),
/* harmony export */   "Cg": () => (/* binding */ Admin_Item_Field_Edit),
/* harmony export */   "aS": () => (/* binding */ Admin_Item_Field_Delete),
/* harmony export */   "A1": () => (/* binding */ Admin_Item_Field_GetOne),
/* harmony export */   "Kw": () => (/* binding */ Admin_Item_Field_GetAll),
/* harmony export */   "tN": () => (/* binding */ Admin_Item_Field_Active),
/* harmony export */   "Jh": () => (/* binding */ Admin_Payment_Mode_ADD),
/* harmony export */   "aX": () => (/* binding */ Admin_Payment_Mode_Edit),
/* harmony export */   "Hz": () => (/* binding */ Admin_Payment_Mode_GetOne),
/* harmony export */   "kB": () => (/* binding */ Admin_Payment_Mode_GetAll),
/* harmony export */   "nr": () => (/* binding */ Admin_Payment_Mode_Delete),
/* harmony export */   "xO": () => (/* binding */ Admin_Payment_Mode_Active),
/* harmony export */   "$c": () => (/* binding */ Admin_Expense_Category_ADD),
/* harmony export */   "nK": () => (/* binding */ Admin_Expense_Category_Delete),
/* harmony export */   "P_": () => (/* binding */ Admin_Expense_Category_GetAll),
/* harmony export */   "bc": () => (/* binding */ Admin_Client_Field_ADD),
/* harmony export */   "nq": () => (/* binding */ Admin_Client_Field_Delete),
/* harmony export */   "MD": () => (/* binding */ Admin_Client_Field_GetAll),
/* harmony export */   "YO": () => (/* binding */ Admin_Client_Field_Active),
/* harmony export */   "Wq": () => (/* binding */ Admin_Contact_ADD),
/* harmony export */   "tE": () => (/* binding */ Admin_Contact_Edit),
/* harmony export */   "fq": () => (/* binding */ Admin_Contact_GetOne),
/* harmony export */   "Zm": () => (/* binding */ Admin_Contact_GetAll),
/* harmony export */   "B4": () => (/* binding */ Admin_Contact_GetSome),
/* harmony export */   "ww": () => (/* binding */ Admin_Contact_Delete),
/* harmony export */   "Rf": () => (/* binding */ Admin_Contact_Active)
/* harmony export */ });
/* unused harmony exports Admin_Accounting_Transaction_Bank_Edit, Admin_Accounting_Transaction_Bank_GetOne, Admin_GoodQuality_Edit, Admin_GoodQuality_Delete, Admin_GoodQuality_GetOne, Admin_Item_Group_ADD, Admin_Item_Group_Delete, Admin_Item_Group_GetAll, Admin_Item_Group_Edit, Admin_Item_Group_GetOne, Admin_Sales_Item_ADD, Admin_Sales_Item_Edit, Admin_Sales_Item_GetOne, Admin_Sales_Item_GetAll, Admin_Sales_Item_All, Admin_Sales_Item_Delete, Admin_Sales_Item_Image */
const API = "https://vl-b.onrender.com";
const Admin_Sign_in = API + "/admin/login";
const Admin_Sign_up = API + "/admin/signup";
const Admin_Verify = API + "/admin/current";
const Admin_Role_ADD = API + "/admin/role/";
const Admin_Role_Edit = API + "/admin/role";
const Admin_Role_Delete = API + "/admin/role";
const Admin_Role_GetOne = API + "/admin/role";
const Admin_Role_GetAll = API + "/admin/role";
const Admin_Department_ADD = API + "/admin/department/";
const Admin_Department_Edit = API + "/admin/department";
const Admin_Department_Delete = API + "/admin/department";
const Admin_Department_GetOne = API + "/admin/department";
const Admin_Department_GetAll = API + "/admin/department";
const Admin_Staff_ADD = API + "/admin/staff/";
const Admin_Staff_Edit = API + "/admin/staff";
const Admin_Staff_Delete = API + "/admin/staff";
const Admin_Staff_GetOne = API + "/admin/staff";
const Admin_Staff_Password = API + "/admin/staff/password";
const Admin_Staff_GetAll = API + "/admin/staff";
const Admin_Staff_Active = API + "/admin/staff/active";
const Admin_Staff_Profile_Image = API + "/admin/staff/image";
const Admin_Client_Group_ADD = API + "/admin/client/group/";
const Admin_Client_Group_Delete = API + "/admin/client/group";
const Admin_Client_Group_GetAll = API + "/admin/client/group";
const Admin_Currency_ADD = API + "/admin/currency/";
const Admin_Currency_Edit = API + "/admin/currency";
const Admin_Currency_Delete = API + "/admin/currency";
const Admin_Currency_GetOne = API + "/admin/currency";
const Admin_Currency_GetAll = API + "/admin/currency";
const Admin_Currency_Default = API + "/admin/currency/default";
const Admin_Tax_ADD = API + "/admin/tax/";
const Admin_Tax_Edit = API + "/admin/tax";
const Admin_Tax_Delete = API + "/admin/tax";
const Admin_Tax_GetOne = API + "/admin/tax";
const Admin_Tax_GetAll = API + "/admin/tax";
const Admin_Client_ADD = API + "/admin/client/";
const Admin_Client_Edit = API + "/admin/client";
const Admin_Client_Delete = API + "/admin/client";
const Admin_Client_GetOne = API + "/admin/client";
const Admin_Client_GetAll = API + "/admin/client";
const Admin_Client_Active = API + "/admin/client/active";
const Admin_Client_Get = API + "/admin/client/";
const Admin_Contract_Type_ADD = API + "/admin/contract/type/";
const Admin_Contract_Type_Delete = API + "/admin/contract/type";
const Admin_Contract_Type_GetAll = API + "/admin/contract/type";
const Admin_Contract_ADD = API + "/admin/contract/";
const Admin_Contract_Edit = API + "/admin/contract";
const Admin_Contract_Delete = API + "/admin/contract";
const Admin_Contract_GetOne = API + "/admin/contract";
const Admin_Contract_GetAll = API + "/admin/contract";
const Admin_Project_ADD = API + "/admin/project/";
const Admin_Project_Edit = API + "/admin/project";
const Admin_Project_Delete = API + "/admin/project";
const Admin_Project_GetOne = API + "/admin/project";
const Admin_Project_GetAll = API + "/admin/project";
const Admin_Accounting_Transaction_Bank_ADD = API + "/admin/account/transaction/bank/";
const Admin_Accounting_Transaction_Bank_Edit = API + "/admin/account/transaction/bank";
const Admin_Accounting_Transaction_Bank_Delete = API + "/admin/account/transaction/bank";
const Admin_Accounting_Transaction_Bank_GetOne = API + "/admin/account/transaction/bank";
const Admin_Accounting_Transaction_Bank_GetAll = API + "/admin/account/transaction/bank";
const Admin_Accounting_JournalEntry_ADD = API + "/admin/account/journalentries/";
const Admin_Accounting_JournalEntry_Edit = API + "/admin/account/journalentries";
const Admin_Accounting_JournalEntry_Delete = API + "/admin/account/journalentries";
const Admin_Accounting_JournalEntry_GetOne = API + "/admin/account/journalentries";
const Admin_Accounting_JournalEntry_GetAll = API + "/admin/account/journalentries";
const Admin_Accounting_Transfer_ADD = API + "/admin/account/transfer/";
const Admin_Accounting_Transfer_Edit = API + "/admin/account/transfer";
const Admin_Accounting_Transfer_Delete = API + "/admin/account/transfer";
const Admin_Accounting_Transfer_GetOne = API + "/admin/account/transfer";
const Admin_Accounting_Transfer_GetAll = API + "/admin/account/transfer";
const Admin_Accounting_Chart_ADD = API + "/admin/account/";
const Admin_Accounting_Chart_Edit = API + "/admin/account";
const Admin_Accounting_Chart_Delete = API + "/admin/account";
const Admin_Accounting_Chart_GetOne = API + "/admin/account";
const Admin_Accounting_Chart_GetAll = API + "/admin/account";
const Admin_Accounting_Chart_Active = API + "/admin/account/active";
const Admin_Warehouse_ADD = API + "/admin/warehouse/";
const Admin_Warehouse_Edit = API + "/admin/warehouse";
const Admin_Warehouse_Delete = API + "/admin/warehouse";
const Admin_Warehouse_GetOne = API + "/admin/warehouse";
const Admin_Warehouse_GetAll = API + "/admin/warehouse";
const Admin_Product_ADD = API + "/admin/product/";
const Admin_Product_Edit = API + "/admin/product";
const Admin_Product_Delete = API + "/admin/product";
const Admin_Product_GetOne = API + "/admin/product";
const Admin_Product_GetAll = API + "/admin/product";
const Admin_Good_ADD = API + "/admin/good/";
const Admin_Good_Edit = API + "/admin/good";
const Admin_Good_Delete = API + "/admin/good";
const Admin_Good_GetOne = API + "/admin/good";
const Admin_Good_GetAll = API + "/admin/good";
const Admin_GoodQuality_ADD = API + "/admin/goodQauntity/";
const Admin_GoodQuality_Edit = API + "/admin/goodQauntity";
const Admin_GoodQuality_Delete = API + "/admin/goodQauntity";
const Admin_GoodQuality_GetOne = API + "/admin/goodQauntity";
const Admin_GoodQuality_GetAll = API + "/admin/goodQauntity";
const Admin_Item_Group_ADD = API + "/admin/item/group/";
const Admin_Item_Group_Delete = API + "/admin/item/group";
const Admin_Item_Group_GetAll = API + "/admin/item/group";
const Admin_Item_Group_Edit = API + "/admin/item/group";
const Admin_Item_Group_GetOne = API + "/admin/item/group";
const Admin_Item_Field_ADD = API + "/admin/item/field/";
const Admin_Item_Field_Edit = API + "/admin/item/field";
const Admin_Item_Field_Delete = API + "/admin/item/field";
const Admin_Item_Field_GetOne = API + "/admin/item/field";
const Admin_Item_Field_GetAll = API + "/admin/item/field";
const Admin_Item_Field_Active = API + "/admin/item/field/active";
const Admin_Sales_Item_ADD = API + "/admin/sales/item/";
const Admin_Sales_Item_Edit = API + "/admin/sales/item";
const Admin_Sales_Item_GetOne = API + "/admin/sales/item";
const Admin_Sales_Item_GetAll = API + "/admin/sales/item";
const Admin_Sales_Item_All = API + "/admin/sales/item";
const Admin_Sales_Item_Delete = API + "/admin/sales/item";
const Admin_Sales_Item_Image = API + "/admin/sales/item/image";
const Admin_Payment_Mode_ADD = API + "/admin/payment/mode/";
const Admin_Payment_Mode_Edit = API + "/admin/payment/mode";
const Admin_Payment_Mode_GetOne = API + "/admin/payment/mode";
const Admin_Payment_Mode_GetAll = API + "/admin/payment/mode";
const Admin_Payment_Mode_Delete = API + "/admin/payment/mode";
const Admin_Payment_Mode_Active = API + "/admin/payment/mode/active";
const Admin_Expense_Category_ADD = API + "/admin/expense/category/";
const Admin_Expense_Category_Delete = API + "/admin/expense/category";
const Admin_Expense_Category_GetAll = API + "/admin/expense/category";
const Admin_Client_Field_ADD = API + "/admin/client/field/";
const Admin_Client_Field_Delete = API + "/admin/client/field";
const Admin_Client_Field_GetAll = API + "/admin/client/field";
const Admin_Client_Field_Active = API + "/admin/client/field/active";
const Admin_Contact_ADD = API + "/admin/contact/";
const Admin_Contact_Edit = API + "/admin/contact";
const Admin_Contact_GetOne = API + "/admin/contact";
const Admin_Contact_GetAll = API + "/admin/contact";
const Admin_Contact_GetSome = API + "/admin/contact/get/some";
const Admin_Contact_Delete = API + "/admin/contact";
const Admin_Contact_Active = API + "/admin/contact/active"; // export const Admin_Subscription_Get =  API + '/admin/subscription/all'
 // export const Admin_Subscription_Delete = API + '/admin/subscription/delete'
 // export const Admin_Subscription_ADD = API + '/admin/subscription/add/'


/***/ })

};
;