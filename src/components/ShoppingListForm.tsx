import React, { useRef, useState } from "react";

interface ShoppingListFormProps {
    addItem: (item: string, amount: number) => void;
}

const ShoppingListForm = ({ addItem }: ShoppingListFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputQuantity = useRef<HTMLInputElement>(null);
    const [validSubmit, setValidSubmit] = useState(true);

    const validateSubmit = () => {
        let valid = true;
        let amount = parseInt(inputQuantity.current!.value);
        if (!amount || amount < 1) {
            valid = false;
        }
        if (!inputRef.current!.value) {
            valid = false;
        }
        console.log(`validating - ${valid}`);
        setValidSubmit(!valid);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const product= inputRef.current!.value;
        const amount = parseInt(inputQuantity.current!.value);
        addItem(product, amount);
        inputRef.current!.value = '';
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                onBlur={validateSubmit}
                ref={inputRef}
            />
            <input
                type="number"
                min={1}
                placeholder="Product Quantity"
                onBlur={validateSubmit}
                ref={inputQuantity}
            />
            <button
                type="submit"
                disabled={validSubmit}
            >
                Add Item
            </button>
        </form>
    );
};

export default ShoppingListForm;