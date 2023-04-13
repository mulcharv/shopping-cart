import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RouteSwitch from './RouteSwitch';
import Home from './components/Home';



describe("RouteSwitch component", () => {
  it("renders homepage by default", () => {
    render(<RouteSwitch />);
    screen.getByText("WE")
  });

  it("renders shop after navbar click on shop link", async () => {
    render(<RouteSwitch />);
    const shoplink = screen.getByRole('link', { name: "Shop"})
    await userEvent.click(shoplink);
    screen.getByText("CATEGORIES")
  } );

  it("renders the respective product page for item clicked in shop", async () => {
    render(<RouteSwitch/>);
    const shoplink = screen.getByRole('link', { name: "Shop"})
    await userEvent.click(shoplink);
    const OGJerseylink = screen.getByText("OG Anunoby OVO 2020 Reversible Practice Jersey")
    await userEvent.click(OGJerseylink)
    screen.getByText("OG Anunoby OVO 2020 Reversible Practice Jersey")
    screen.queryByText("CATEGORIES")
  });

  it("adds an item to cart and renders it in cart", async () => {
    render(<RouteSwitch/>);
    const shoplink = screen.getByRole('link', { name: "Shop"})
    await userEvent.click(shoplink);
    const OGJerseylink = screen.getByText("OG Anunoby OVO 2020 Reversible Practice Jersey")
    await userEvent.click(OGJerseylink)
    const addToCart = screen.getByRole("button", { name: "Add To Cart" })
    await userEvent.click(addToCart)
    expect(screen.getByRole('link', {name: 'Cart 1'})).toHaveTextContent('1')
    const cartlink = screen.getByRole('link', {name: 'Cart 1'})
    await userEvent.click(cartlink)
    screen.getByText('YOUR CART')
    screen.getByText('OG Anunoby OVO 2020 Reversible Practice Jersey')
    screen.getByText('Unit Price: $168')
  });

  it("adds another instance of the item to the cart from the cart page", async () => {
    render(<RouteSwitch/>);
    const shoplink = screen.getByRole('link', { name: "Shop"})
    await userEvent.click(shoplink);
    const OGJerseylink = screen.getByText("OG Anunoby OVO 2020 Reversible Practice Jersey")
    await userEvent.click(OGJerseylink)
    const addToCart = screen.getByRole("button", { name: "Add To Cart" })
    await userEvent.click(addToCart)
    const cartlink = screen.getByRole('link', {name: 'Cart 1'})
    await userEvent.click(cartlink)
    const addbtn = screen.getByRole('button', { name: "+"})
    await userEvent.click(addbtn)
    screen.getByText('Item Total: $336.00')
    expect(screen.getByRole('link', {name: 'Cart 2'})).toHaveTextContent('2')

  })

})
