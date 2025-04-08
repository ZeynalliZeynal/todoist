'use server';

import axios from 'axios';

export async function getClientChangelog() {
  try {
    const response = await axios(
      'https://raw.githubusercontent.com/ZeynalliZeynal/todoist/main/CHANGELOG.md',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}
