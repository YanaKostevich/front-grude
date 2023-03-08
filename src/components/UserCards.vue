<template>
  <div class="card">
    <div class="main">
      <table>
        <tr>
          <td>
            {{ name }}
          </td>
          <td>
            {{ email }}
          </td>
          <td>
            {{ number }}
          </td>
          <td>
            {{ event }}
          </td>
          <td>
            {{ name }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    number: {
      type: Number,
      default: 0,
    },
    event: {
      type: Date,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: left;
  tr {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    td {
      width: 200px;
    }
  }
}
</style>
