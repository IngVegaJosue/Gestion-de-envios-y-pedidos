document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("order-form");
  const orderList = document.getElementById("order-list");

  // Manejar envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const customer = document.getElementById("customer").value;
    const address = document.getElementById("address").value;
    const product = document.getElementById("product").value;
    const date = document.getElementById("date").value;

    addOrder(customer, address, product, date);
    form.reset();
  });

  // Función para agregar pedido
  function addOrder(customer, address, product, date) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${customer}</td>
      <td>${address}</td>
      <td>${product}</td>
      <td>${date}</td>
      <td>Pendiente</td>
      <td>
        <button class="delivered">Entregado</button>
        <button class="delete">Eliminar</button>
      </td>
    `;

    // Marcar como entregado
    row.querySelector(".delivered").addEventListener("click", () => {
      row.cells[4].textContent = "Entregado";
      row.querySelector(".delivered").disabled = true;
    });

    // Eliminar pedido
    row.querySelector(".delete").addEventListener("click", () => {
      row.remove();
    });

    orderList.appendChild(row);
  }
});
