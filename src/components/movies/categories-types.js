import React, { useState } from "react";
import { ToggleButton, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MOVIES_TYPES } from "../../constants/movie";
import { updateMoviesType } from "../../store/slices/features/movies";

export function CategorySelect() {
    const  [catSelected, setCatSelected] = useState('trending')

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    setCatSelected(e.target.value)
    dispatch(updateMoviesType(e.target.value))
  };

  return (
    <div className="media-cat-container">
        <ButtonGroup className="button-chip-container">
            {MOVIES_TYPES.map((type, idx) => {
                const { name, value} = type;
                return (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    // variant={catSelected === value ? "primary" : "outline-primary"}
                    className={`chip-button ${catSelected === value ? "chip-button-active" : "chip-button-outline"}`}
                    name="radio"
                    value={value}
                    checked={catSelected === value}
                    onChange={ handleSelect }
                >
                    { name }
                </ToggleButton>
                )
            })}
        </ButtonGroup>
    </div>
  );
}
