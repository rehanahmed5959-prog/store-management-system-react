import React from 'react';

export default function Receipt({ sale, formatCurrency }) {
  if (!sale) return <div className="card"><h3>No receipt</h3></div>;

  return (
    <div className="card receipt">
      <h3>Receipt</h3>
      <div><strong>Sale ID:</strong> {sale.id}</div>
      <div><strong>Date:</strong> {new Date(sale.date).toLocaleString()}</div>
      <table className="table receipt-table">
        <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
        <tbody>
          {sale.items.map(it => (
            <tr key={it.id}><td>{it.name}</td><td>{it.quantity}</td><td>{formatCurrency ? formatCurrency(it.price) : it.price.toFixed(2)}</td><td>{formatCurrency ? formatCurrency(it.price * it.quantity) : (it.price * it.quantity).toFixed(2)}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="receipt-summary">
        <div>Subtotal: {formatCurrency ? formatCurrency(sale.subtotal) : sale.subtotal.toFixed(2)}</div>
        <div>Discount: {formatCurrency ? formatCurrency(sale.discount) : sale.discount.toFixed(2)}</div>
        <div>Tax: {formatCurrency ? formatCurrency(sale.tax) : sale.tax.toFixed(2)}</div>
        <div><strong>Total: {formatCurrency ? formatCurrency(sale.total) : sale.total.toFixed(2)}</strong></div>
      </div>
    </div>
  );
}
