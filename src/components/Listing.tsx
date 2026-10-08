import React from "react";

export interface MainImage {
  url_570xN: string;
}

export interface ListingItem {
  listing_id: number;
  url?: string;
  MainImage?: MainImage;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

export interface ListingProps {
  items?: ListingItem[];
}

export default function Listing({
  items = [],
}: ListingProps): React.JSX.Element {
  return (
    <div className="item-list">
      {items.map((item: ListingItem) => {
        if (
          !item.MainImage ||
          !item.title ||
          item.quantity === undefined ||
          !item.price ||
          !item.currency_code
        ) {
          return null;
        }

        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity,
        } = item;

        const formattedTitle: string =
          title.length > 50 ? `${title.slice(0, 50)}…` : title;

        let formattedPrice: string = "";
        if (currency_code === "USD") {
          formattedPrice = `$${price}`;
        } else if (currency_code === "EUR") {
          formattedPrice = `€${price}`;
        } else {
          formattedPrice = `${currency_code} ${price}`;
        }

        let levelClass: string = "level-high";
        if (quantity <= 10) {
          levelClass = "level-low";
        } else if (quantity <= 20) {
          levelClass = "level-medium";
        }

        return (
          <div className="item" key={listing_id}>
            <div className="item-image">
              <a href={url}>
                <img src={MainImage.url_570xN} alt={formattedTitle} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{formattedTitle}</p>
              <div className="price-container">
                <p className="item-price">{formattedPrice}</p>
                <p className={`item-quantity ${levelClass}`}>{quantity} left</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
