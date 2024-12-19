<template>
    <section>
        <div style="display: flex; justify-content: space-between; border: 1px solid black; padding: 5px; align-items: center;">
            <div style="width: 50px;">
             Header
            </div>
            <ul style="display: flex ; gap: 10px;">
                <li style="list-style-type: none;">
                    <router-link :to="{name: 'page-one'}" style="  text-decoration: none; color: gray;" class="nav-link " >Page One</router-link>
                </li>
                <li style="list-style-type: none;">
                    <router-link :to="{name: 'page-two'}" style="  text-decoration: none; color: gray;" class="nav-link" >Page Two</router-link>
                </li>
                <li style="list-style-type: none;">
                    <router-link :to="{name: 'page-three'}" style="  text-decoration: none; color: gray;" class="nav-link" >Page Three</router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<style>
.nav-link:hover{
     background-color: lightgray;

}
.router-link-active{
    font-weight: bold;
    color: red;
}
</style>