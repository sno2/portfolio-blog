<template>
    <header>
        <h2 v-html="$static.metadata.siteName" />

        <nav>
            <g-link to="/">Home</g-link>
            <g-link to="/about/">About</g-link>
            <g-link to="/blog/">Blog</g-link>
        </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 5.25rem;
    padding: 0 5%;
    background: $blue;
    color: $white;

    h2 {
        font-size: 1.4rem;
        font-weight: 500;
    }

    nav a {
        color: inherit;
        text-decoration: none;
        padding: 1rem;
        font-size: 1.2rem;
    }
}
</style>