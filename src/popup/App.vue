<template>
  <q-card>
    <q-tabs v-model="tab" dense class="">
      <q-tabs
        v-model="tab"
        dense
        class="bg-purple text-white"
        align="justify"
        narrow-indicator
        style="border-radius: 0px;"

      >
        <q-tab v-for="(item, index) in tabs"  :key="index"
               :icon="item.icon"
               v-bind:name="item.title"
               q-tab v-bind:label="item.title"
        />
      </q-tabs>
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel v-bind:name="item.title" class="q-pa-none" v-for="(item, index) in tabs"  :key="index">
        <q-splitter v-model="splitterModel">
          <template v-slot:before>
            <q-tabs
              v-model="innerTab"
              vertical
              class="text-teal"
            >
              <q-tab name="innerMails" icon="mail" label="Mails" />
              <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
              <q-tab name="innerMovies" icon="movie" label="Movies" />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="innerTab"
              animated
              transition-prev="slide-down"
              transition-next="slide-up"
            >
              <q-tab-panel name="innerMails">
                <div class="text-h4 q-mb-md">Mails</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              </q-tab-panel>

              <q-tab-panel name="innerAlarms">
                <div class="text-h4 q-mb-md">Alarms</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              </q-tab-panel>

              <q-tab-panel name="innerMovies">
                <div class="text-h4 q-mb-md">Movies</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              </q-tab-panel>
            </q-tab-panels>
          </template>

        </q-splitter>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup () {
    return {
      tabs: {
        users: {
          icon: 'mdi-account',
          active: true,
          title: 'users',
          child: {
            login: {
              icon: 'mdi-account',
              active: true,
              title: 'users'
            },
            signup: {
              icon: 'mdi-account',
              active: true,
              title: 'users'
            }
          }
        },
        setting: {
          icon: 'mdi-cog',
          active: false,
          title: 'setting',
          child: {}
        }
      },
      tab: ref('users'),
      innerTab: ref('innerMails'),
      splitterModel: ref(20)
    }
  }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
