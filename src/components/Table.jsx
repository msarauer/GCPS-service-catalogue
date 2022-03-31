import React from "react";

import { RichText } from "prismic-reactjs";

const Table = ({ items, caption }) => {
  const row_data = items[0].table_row_link.document.data.row;
  const remainingRows = items.slice(1);

  const createRow = () => {
    const array = [];
    for (let x = 0; x < remainingRows.length; x++) {
      const row_items = remainingRows[x].table_row_link.document.data.row;
      console.log(row_items);
      array.push(
        <tr>
          {row_items.map((item, i) => {
            if (i === 0) {
              return <th scope="row">{item.cell_item.richText[0].text}</th>;
            }
            return (
              <td>
                <RichText render={item.cell_item.richText} />
              </td>
            );
          })}
        </tr>
      );
    }
    return array;
  };

  return (
    <div>
      <table className="table table-responsive-lg">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {row_data.map((item) => (
              <th scope="col" className="text-center mb-0">
                {item.cell_item.richText.length > 0 &&
                  item.cell_item.richText[0].text}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{createRow().map((row) => row)}</tbody>
      </table>
    </div>
  );
};

export default Table;
