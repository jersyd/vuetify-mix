<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>
                            {{ title }}
                        </v-card-title>
                        <v-card-text>
                            <v-btn color="primary">Primary Button</v-btn>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
  
<script>
export default {
    props: {
        title: String
    },
    data() {
        return {};
    },
};
</script>
  
<style>
/* Add CSS styles for the component if needed */
</style>