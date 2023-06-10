<template>
  <div class="edit-anime">
    <h2>Edit Anime</h2>

    <form @submit.prevent="onSubmit" @reset="onReset" v-if="show" class="edit-anime-form">
      <div class="form-group">
        <label for="input-1">Title:</label>
        <input
          id="input-1"
          v-model="form.title"
          type="text"
          placeholder="Enter the title"
          required
        />
      </div>

      <div class="form-group">
        <label for="input-2">Number of episodes:</label>
        <input
          id="input-2"
          v-model="form.episodes"
          placeholder="Enter number of episodes"
          type="number"
          min="0"
        />
      </div>

      <div class="form-group">
        <label for="input-3">Status:</label>
        <select id="input-3" v-model="form.status" required>
          <option value="" disabled>Select One</option>
          <option value="OnGoing">OnGoing</option>
          <option value="Finished">Finished</option>
        </select>
      </div>

      <div class="form-group">
        <label for="input-4">Image URL:</label>
        <input
          id="input-4"
          v-model="form.imgUrl"
          placeholder="Enter an URL for the cover image"
          type="url"
        />
      </div>

     <button type="submit" class="save-button">Save</button>
    </form>
    <div class="form-data-result">
      <pre>{{ form }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        episodes: 0,
        status: null,
        imgUrl: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      // Handle form submission
    },
  
  },
};
</script>
<style lang="scss">
.edit-anime {
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
  .edit-anime-form {
    text-align: center;
    .form-group {
      margin-bottom: 30px;

      label {
        display: block;
        font-weight: bold;
        margin-bottom: 14px;
        font-size: 16px;
      }

      input[type='text'],
      input[type='number'],
      select {
        width: 75%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        box-sizing: border-box;
      }
    }
     #input-4 {
    width: 1100px; /* Adjust the width as desired */
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

    .save-button {
      background-color: white;
      color: black;
      border-radius: 10em;
      font-size: 17px;
      font-weight: 600;
      padding: 1em 2em;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      border: 1px solid black;
      box-shadow: 0 0 0 0 black;

      &:hover {
        transform: translateY(-4px) translateX(-2px);
        box-shadow: 2px 5px 0 0 black;
      }

      &:active {
        transform: translateY(2px) translateX(1px);
        box-shadow: 0 0 0 0 black;
      }
    }

  }

  .form-data-result {
    margin-top: 20px;

    pre {
      text-align: center;
      background-color: #f8f9fa;
      padding: 10px;
      border-radius: 4px;
      font-size: 14px;
    }
  }
}
</style>

