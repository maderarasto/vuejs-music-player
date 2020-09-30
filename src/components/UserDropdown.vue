<template>
  <div class="user-dropdown">
    <div class="dropdown-button" @click="onButtonClick" v-click-outside="{exclude: '.user-dropdown', handler: onOutsideClick}">
      <div class="user-picture"></div>
      <div class="user-name">Rastislav Madera</div>
      <div class="dropdown-arrow"><i class="fas fa-sort-down"></i></div>
    </div>

    <div :class="dropdownMenuClasses">
      <a href="#" class="dropdown-item">Acount</a>
      <a href="#" class="dropdown-item">Profile</a>
      <a href="#" class="dropdown-item">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDropdown',

  data() {
    return {
      menuActive: false
    }
  },

  computed: {
    dropdownMenuClasses() {
      return ['dropdown-menu', this.menuActive ? 'dropdown-menu-active' : ''];
    }
  },

  methods: {
    onButtonClick() {
      this.menuActive = !this.menuActive;
    },

    onOutsideClick() {
      this.menuActive = false;
    }
  }
}
</script>

<style>
.user-dropdown {
  position: relative;
  width: 175px;
  height: 30px;
  cursor: pointer;
}

.dropdown-button {
  display: flex;
  width: 100%;
  height: 100%;

  border: 1px solid #040404;
  border-radius: 25px;
  justify-content: space-between;
  align-items: center;

  background-color: #040404;
  color: white;
}

.dropdown-button:hover {
  background-color: #303030;
  border-color: #303030;
}

.dropdown-button .user-picture {
  width: 30px;
  height: 30px;
  border-radius: 25px;

  background-color: whitesmoke;
}

.dropdown-button .user-name {
  width: 110px;
  padding-left: 10px;

  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-button .dropdown-arrow {
  width: 30px;
  font-size: 14pt;
  margin-bottom: 3px;
}

.user-dropdown .dropdown-menu {
  position: absolute;
  top: 37px;
  right: 0;

  display: none;
  min-width: 190px;
  border: 1px solid #303030;
  border-radius: 5px;

  background-color: #303030;
}

.user-dropdown .dropdown-menu .dropdown-item {
  display: block;
  padding: 10px 15px;

  text-align: left;
  text-decoration: none;

  color: white;
}

.user-dropdown .dropdown-menu .dropdown-item:hover {
  background-color: #505050;
}

.user-dropdown .dropdown-menu .dropdown-item:first-child:hover {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.user-dropdown .dropdown-menu .dropdown-item:last-child:hover {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.user-dropdown .dropdown-menu.dropdown-menu-active {
  display: block;
}
</style>