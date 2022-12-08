import { v4 as uuidv4 } from 'uuid';

const checkId: string = uuidv4();

describe('💅 Buttons Look Right', () => {
  test(
    'Button',
    async () => {
      await expect({
        check_id: checkId,
        // Story comfiguration
        path: 'Example', // highest level storybook heirarchy
        component: 'Button',
        story: 'Primary', // lowest level
        dataPath: './assets', // the figma export named [component]-[story].png
        height: '68', // browser screenshot dimensions
        width: '116',
        debug: true,
        repository: 'engi-network/demo-same-story-next',
        url_check_frame: '',
      }).toBeSameStory();
    },
    100000
  );
});
