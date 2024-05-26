import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="car" />;

export default function Arrows() {
  return (
    <ScrollView style={styles.container}>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://on-panel.vercel.app/images/adaptive-icon.png" }} style={styles.img} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button style={{ backgroundColor: "blue" }}>Ok</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://on-panel.vercel.app/images/adaptive-icon.png" }} style={styles.img} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button style={{ backgroundColor: "blue" }} >Ok</Button>
        </Card.Actions>
      </Card>


      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://on-panel.vercel.app/images/adaptive-icon.png" }} style={styles.img} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button style={{ backgroundColor: "blue" }} >Ok</Button>
        </Card.Actions>
      </Card>


      <Card style={styles.cardBox}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://on-panel.vercel.app/images/adaptive-icon.png" }} style={styles.img} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button style={{ backgroundColor: "blue" }} >Ok</Button>
        </Card.Actions>
      </Card>



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardBox:{
    margin:10
  },
  img:{
    padding:10
  }
});



//you can change your own data on card img,title like that ....