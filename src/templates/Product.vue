<template>
    <Layout>
        <h1 v-html="$context.product.name" />
        <h3>${{ $context.product.price }}</h3>
        <!-- {{ $context.product }} -->
    </Layout>
</template>