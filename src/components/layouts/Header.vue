<template>
  <header class="header">
    <div class="header_left">LOGO</div>
    <div class="header_right">
      <ul class="nav">
        <li
          class="nav_link"
          v-for="({ id, name }, key) in categories"
          :key="key"
        >
          <router-Link :to="`category/${id}`">{{ name }}</router-Link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "MevnHeader",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
