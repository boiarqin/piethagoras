import BackOfHouse from "../../layouts/back-of-house";
import { useGetInventoryItemByIdQuery } from "../../redux/services/inventory";

import sectionStyles from '../../styles/components/Sections.module.css';

const InventoryItemDetail = ({itemId}) => {

    const { data: itemData, error: itemError, isLoading: isItemLoading } = useGetInventoryItemByIdQuery(itemId)

    const {
        id,
        itemName,
        category,
        supplier,
        supplierId,
        availableQuantity
    } = itemData || {};

    return (
        <BackOfHouse>
            {isItemLoading && <>...Loading</>}
            {itemError  && <>Error: {itemError.message}</>}
            {itemData && (
                <>
                    <h1>Item Detail: {itemName}</h1>
                    <section className={`${sectionStyles.section}`}>
                        <div className={sectionStyles.interior}>
                            <p><strong>Item Name: </strong> {itemName}</p>
                            <p><strong>Category: </strong> {category}</p>
                            <p><strong>Supplier: </strong> {supplier}</p>
                            <p><strong>Supplier Item ID: </strong> {supplierId}</p>
                            <p><strong>Available Quantity: </strong> {availableQuantity}</p>
                        </div>
                    </section>
                    <section className={`${sectionStyles.section}`}>
                        <div className={sectionStyles.interior}>
                            <h2>Preparation and Handling</h2>
                            <p>Hand tossed labore spinach sausage marinara ad cillum veniam non laborum elit. Party cupidatat ex proident philly steak bacon personal bbq rib eiusmod garlic parmesan. Enim steak in, bbq rib laboris party hawaiian mushrooms consequat. Officia veniam tempor, nulla meatball hand tossed mozzarella aliquip pariatur proident. Onions pepperoni mayo, excepteur deserunt incididunt lasagna elit anim ex quis sauteed onions bbq sauce black olives. String cheese bianca ut occaecat do eu bbq rib steak extra sauce meat lovers eiusmod philly chicken non excepteur deep crust. Sausage qui adipisicing esse white garlic.</p>
                            <p>Extra cheese duis ricotta chicken and bacon dolore NY style. Pineapple adipisicing eiusmod, bbq sauce broccoli extra cheese est tempor. Anchovies buffalo sauce enim ranch beef, nostrud id in party fugiat magna eiusmod labore burnt mouth. Thin crust burnt mouth cillum, consectetur mollit mayo meat lovers.</p>
                        </div>
                    </section>
                </>
            )}

        </BackOfHouse>
    )
}

export default InventoryItemDetail;

export async function getServerSideProps(context) {
    return {
      props: {
        // props for your component
        // workaround for nextjs router not being immediately available
        itemId: context.query.id,
      },
    };
  }