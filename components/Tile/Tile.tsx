import * as React from "react";
import clsx from "clsx";
import styles from "./Tile.module.css";
import Link from "next/link";

type TileType = "primary" | "secondary" | "selected";

export interface TileProps {
    type: TileType;
    name: string;
    asLink?: boolean;
}

const Tile: React.FunctionComponent<TileProps> = (props) => {
    const { type, name, asLink } = props;

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
            href={`category/${name.substring(3).toLowerCase()}`}
        >
            {name}
        </Link>
    ) : (
        <div
            className={clsx(styles.wrapper, {
                [styles.selected]: typeState === "selected",
                [styles.secondary]: typeState === "secondary",
            })}
            onClick={handleOnClick}
        >
            {name}
        </div>
    );
};

export default Tile;
