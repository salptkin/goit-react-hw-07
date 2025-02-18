import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
    const currentFilter = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState(currentFilter || "");

    function handleChange(e) {
        setSearchValue(e.target.value);
        dispatch(changeFilter(e.target.value));
    }

    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                type="search"
                name="search"
                placeholder="Search..."
                value={searchValue}
                onChange={handleChange} />
        </div>
    );
}
