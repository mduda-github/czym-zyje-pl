import * as React from "react";
import clsx from "clsx";
import styles from "./Tile.module.css";
import Link from "next/link";
import { Category } from "@prisma/client";

type TileType = "primary" | "secondary" | "selected";

export interface TileProps {
    type: TileType;
    category: Category;
    asLink?: boolean;
}

const Tile: React.FunctionComponent<TileProps> = (props) => {
    const { type, category, asLink } = props;

    const [typeState, setTypeState] = React.useState(type);

    const handleOnClick = () => {
        if (typeState === type) {
            setTypeState("selected");
        } else {
            setTypeState(type);
        }
    };

    return asLink ? (
        <Link
            className={styles.wrapper}
            href={`category/${category.slug}`}
        >
            {category.symbol} {category.name}
        </Link>
    ) : (
        <div
            className={clsx(styles.wrapper, {
                [styles.selected]: typeState === "selected",
                [styles.secondary]: typeState === "secondary",
            })}
            onClick={handleOnClick}
        >
            {category.symbol} {category.name}
        </div>
    );
};

export default Tile;
