import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomProductsList from "./ProductsList";
import CustomProductsObjectPage from "./ProductsObjectPage";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("inventoryui") + "/test/flp.html#app-preview",
    pages: {
        onTheProductsList: new ListReport(
            {
                appId: "inventoryui",
                componentId: "ProductsList",
                entitySet: "",
                contextPath: "/Products"
            },
            CustomProductsList
        ),
        onTheProductsObjectPage: new ObjectPage(
            {
                appId: "inventoryui",
                componentId: "ProductsObjectPage",
                entitySet: "",
                contextPath: "/Products"
            },
            CustomProductsObjectPage
        )
    },
    async: true
});

export default runner;
