<script setup lang="ts">
import type { BlogContent } from "~/types/Post";

defineProps<{
  list: BlogContent[];
}>();
</script>

<template>
  <div v-for="post in sortByDate(list)" :key="post._path" class="postItem">
    <div class="card">
      <div class="cardInfo">
        <div class="o-1">
          <h2 class="title">
            {{ post.title }}
          </h2>
          <p class="date">
            {{ post.date }}
          </p>
        </div>
        <div class="o-2">
          <SkinnyBtn v-if="post.external" :external-link="post.external" />
          <SkinnyBtn v-else :internal-link="post._path" />
        </div>
      </div>
      <p class="description">
        {{ post.description }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.postItem {
  display: flex;
  align-items: flex-start;
  @include for-phone-only {
    display: block;
  }
}

.card {
  padding: 1rem;
  background-color: var(--card);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;
}

.cardInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @include for-phone-only {
    flex-direction: column;
    gap: 0.5rem;
    .o-1 {
      order: 2;
      margin-right: auto;
    }
    .o-2 {
      order: 1;
      margin-left: auto;
    }
  }
}

.title {
  font-size: 1rem;
}

.date {
  font-style: italic;
  font-size: 0.85rem;
  color: $mint;
}

.description {
  width: 500px;
  @include for-phone-only {
    font-size: 0.9rem;
    width: 100%;
  }
}
</style>
